"""empty message

Revision ID: 02e4d69912bf
Revises: 
Create Date: 2021-11-22 17:06:30.134477

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '02e4d69912bf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(op.f('fk_pieraksts_id_arsts_piraksts_arsti'), 'pieraksts', 'arsti', ['id_arsts_piraksts'], ['id_arsts'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(op.f('fk_pieraksts_id_arsts_piraksts_arsti'), 'pieraksts', type_='foreignkey')
    # ### end Alembic commands ###
