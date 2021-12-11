from django.db import models


class Purchase(models.Model):
    user = models.BigIntegerField()
    pack = models.CharField(max_length=50)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    buyer_id = models.IntegerField(default=1)
    buyer_card = models.BigIntegerField(default=1111111111111111)
    buyer_card_name = models.CharField(max_length=50)
    buyer_card_due_date = models.DateField()
    buyer_card_cvv = models.IntegerField(default=111)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Id: {self.id} - Total: {self.total}"
