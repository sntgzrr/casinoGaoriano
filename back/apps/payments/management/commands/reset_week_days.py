from django.core.management.base import BaseCommand
from ...models import Payment

class Command(BaseCommand):
    help = 'Reset days of the week for all payments to False'

    def handle(self, *args, **kwargs):
        updated = Payment.objects.update(
            monday=False,
            tuesday=False,
            wednesday=False,
            thursday=False,
            friday=False,
            saturday=False,
            sunday=False,
        )
        self.stdout.write(self.style.SUCCESS(
            f'Successfully reset days of the week for {updated} payments.'
        ))
