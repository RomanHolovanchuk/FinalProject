# Отримуємо ID твоєї Hosted Zone (яку ти створив вручну або теж через Terraform)
resource "aws_route53_record" "www" {
  zone_id = "Z07458821IAM078E84GNH"  
  name    = "gameshop.pp.ua"      
  type    = "A"

  alias {
    # Ось тут магія: ми не пишемо адресу, ми посилаємося на ресурс балансувальника
    name                   = aws_lb.main.dns_name
    zone_id                = aws_lb.main.zone_id
    evaluate_target_health = true
  }
}