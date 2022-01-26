import sqlalchemy
from settings import app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import MetaData
from flask_login import LoginManager, login_manager, UserMixin, current_user

convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

_metadata = MetaData(naming_convention=convention)

# Database connect
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///slimnicas_db.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app, metadata=_metadata)

# Migrations
migrate = Migrate(app, db, render_As_batch=True)


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nosuakums = db.Column(db.String(300), nullable=False)
    bilde = db.Column(db.Text, unique=True)
    name = db.Column(db.String(300), nullable=False)
    children = db.relationship("Arsti", cascade="all, delete")

    def __repr__(self):
        return '<Item %r>' % self.id


class Arsti(db.Model):
    id_slimnica = db.Column(db.Integer, db.ForeignKey("item.id"))
    id_arsts = db.Column(db.Integer, primary_key=True)
    Vards_uzvards = db.Column(db.String(300), nullable=False)
    Profesija = db.Column(db.String(300), nullable=False)
    pirmdiena_No = db.Column(db.String(50))
    pirmdiena_Lidz = db.Column(db.String(50))
    Otradiena_No = db.Column(db.String(50))
    Otradiena_Lidz = db.Column(db.String(50))
    Trezdiena_No = db.Column(db.String(50))
    Trezdiena_Lidz = db.Column(db.String(50))
    Ceturdiena_NO = db.Column(db.String(50))
    Ceturdiena_Lidz = db.Column(db.String(50))
    Piekdiena_No = db.Column(db.String(50))
    Piekdiena_Lidz = db.Column(db.String(50))
    Sesdiena_No = db.Column(db.String(50))
    Sesdiena_Lidz = db.Column(db.String(50))
    Svetdiena_No = db.Column(db.String(50))
    Svetdiena_Lidz = db.Column(db.String(50))
    Arsta_Bilde = db.Column(db.Text, unique=True)
    Arsta_Bilde_nosaukums = db.Column(db.String(300), nullable=False)
    children = db.relationship("Pieraksts", cascade="all, delete")

    def __repr__(self):
        return '<Arsti %r>' % self.id_arsts


class Pieraksts(db.Model):

    id_pieraksts = db.Column(db.Integer, primary_key=True)
    id_arsts_piraksts = db.Column(db.Integer, db.ForeignKey("arsti.id_arsts"), nullable=False)
    Pieraksts_Vards_Uzvards = db.Column(db.String(300), nullable=False)
    Vizītes_laiks = db.Column(db.String(300), nullable=False)
    Vizītes_Nr = db.Column(db.String(10), nullable=False)

    def __repr__(self):
        return '<Pieraksts %r>' % self.id


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(128), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)


db.create_all()
