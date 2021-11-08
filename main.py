from flask import Flask, render_template, url_for, request, redirect, Response, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename
import os
import urllib.request



app = Flask('__name__')

UPLOAD_FOLDER = 'static/uploads/'

app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///slimnicas.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
db = SQLAlchemy(app)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class Item(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  nosuakums = db.Column(db.String(300), nullable = False)
  bilde = db.Column(db.Text, unique=True, nullable=False)

  def __repr__(self):
    return '<Item %r>' % self.id


@app.route('/')
def Sakums():
  return render_template("sakums.html")


@app.route('/slimnicas',methods = ['POST','GET'])
def slimnicas():
  if request.method == 'POST':
    nosuakums = request.form['nosuakums']
    bilde = request.files['file']

    filename = secure_filename(bilde.filename)
    bilde.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    item = Item(nosuakums = nosuakums, bilde = bilde.read(),)

    try:
      db.session.add(item)
      db.session.commit()
      return redirect('/slimnicas')

    except:
      return "Kļūda"

  else:
    slimnicas = Item.query.all()
    return render_template("slimnicas.html",slimnicas = slimnicas)

@app.route('/slimnicas/<int:id>/del')
def slimnica_delete(id):
  slimnica = Item.query.get_or_404(id)

  try:
    db.session.delete(slimnica)
    db.session.commit()
    return redirect('/slimnicas')

  except:
    return 'Dzēšot slimnīcu notika kļūda!'


@app.route('/slimnicas/<int:id>/edit',methods = ['POST','GET'])
def slimnicas_edit(id):
  slimnica = Item.query.get(id)
  if request.method == 'POST':
    slimnica.nosuakums = request.form['nosuakums']
    slimnica.bilde = request.form['file']

    try:
      db.session.commit()
      return redirect('/slimnicas')

    except:
      return "Redaktējot slimnīcu notika kļūda."

  else:
    slimnica = Item.query.get(id)
    return render_template("slimnicas_edit.html",slimnica = slimnica)

@app.route('/pacientiem')
def pacientiem():
  return render_template("pacientiem.html")

@app.route('/kontakti')
def Kontakti():
  return render_template("kontakti.html")

@app.route('/slimnica/<int:id>')
def arsti(id):
  slimnica = Item.query.get(id)

  return render_template("arsti.html",slimnica = slimnica)


if __name__ == "__main__":
  app.run(debug=True)