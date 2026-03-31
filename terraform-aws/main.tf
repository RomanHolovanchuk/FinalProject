provider "aws" {
  region = "eu-north-1" 
}

# 1. Створюємо "Фаєрвол" (Security Group)
resource "aws_security_group" "gameshop_sg" {
  name        = "gameshop-allow-web"
  description = "Allow HTTP and SSH traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Дозволяємо SSH звідусіль (для навчання ок)
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Відкриваємо сайт для всього світу
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"] # Дозволяємо серверу ходити в інтернет (тягнути Docker)
  }
}

# 2. Створюємо сам сервер EC2
resource "aws_instance" "gameshop_prod" {
  ami           = "ami-080254318c2d8932f" # Ubuntu 24.04 LTS у eu-north-1 
  instance_type = "t3.micro"             # Free Tier!

  vpc_security_group_ids = [aws_security_group.gameshop_sg.id]
  key_name               = "newKey" 
  tags = {
    Name = "GameShop-Stockholm"
  }

  # Автоматизація: встановлюємо Docker і запускаємо сайт
  user_data = <<-EOF
              #!/bin/bash
              sudo apt update
              sudo apt install -y docker.io
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo docker run -d -p 80:80 dollar329/shop-app:latest
              EOF
}

# Виводимо публічну IP адресу після запуску
output "server_ip" {
  value = aws_instance.gameshop_prod.public_ip
}