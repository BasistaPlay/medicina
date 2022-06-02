import re
from flask import Flask, render_template, url_for, request, redirect, Response, flash
from flask_login.utils import login_required, login_user, logout_user
from werkzeug.utils import secure_filename
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy
from settings import app
from models import db, Item, Arsti, Pieraksts, User
from flask_login import LoginManager, login_manager, UserMixin, current_user
import os
import random


UPLOAD_FOLDER = 'static/UploadsSlimnicas/'
UPLOAD_FOLDER_ARSTS = 'static/UploadsArsti/'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
app.secret_key = "secret key"


manager = LoginManager(app)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['UPLOAD_FOLDER_ARSTS'] = UPLOAD_FOLDER_ARSTS


def allowed_file(name):
    return '.' in name and name.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/')
@app.route('/sakums')
def Sakums():
    return render_template("sakums.html")


@app.route('/slimnicas', methods=['POST', 'GET'])
def slimnicas():
    if request.method == 'POST':
        nosuakums = request.form['nosuakums']
        bilde = request.files['file']
        name = secure_filename(bilde.filename)

        bilde.save(os.path.join(app.config['UPLOAD_FOLDER'], name))
        item = Item(nosuakums=nosuakums, name=name)

        try:
            db.session.add(item)
            db.session.commit()
            return redirect('/slimnicas')

        except:
            return "Kļūda"

    else:
        slimnicas = Item.query.all()
        return render_template("slimnicas.html", slimnicas=slimnicas)


@app.route('/slimnicas/<int:id>/del')
@login_required
def slimnica_delete(id):
    slimnica = Item.query.get_or_404(id)

    try:
        os.remove(os.path.join(app.config['UPLOAD_FOLDER'], slimnica.name))
        db.session.delete(slimnica)
        db.session.commit()
        return redirect('/slimnicas')

    except:
        return 'Dzēšot slimnīcu notika kļūda!'


@app.route('/slimnicas/<int:id>/edit', methods=['POST', 'GET'])
@login_required
def slimnicas_edit(id):
    slimnica = Item.query.get(id)
    if request.method == 'POST':
        slimnica.nosuakums = request.form['nosuakums']

        try:
            db.session.commit()
            return redirect('/slimnicas')

        except:
            return "Redaktējot slimnīcu notika kļūda."

    else:
        slimnica = Item.query.get(id)
        return render_template("slimnicas_edit.html", slimnica=slimnica)


@app.route('/pacientiem')
def pacientiem():
    return render_template("pacientiem.html")


@app.route('/slimnica/<int:id>', methods=['POST', 'GET'])
def arsti(id):
    slimnica = Item.query.get(id)
    if request.method == 'POST':
        id_slimnica = id
        Vards_uzvards = request.form['Vards_uzvards']
        Profesija = request.form['Profesija']
        pirmdiena_No = request.form['Pirmdienas']
        pirmdiena_Lidz = request.form['Pirmdienas2']
        if pirmdiena_No == '' and pirmdiena_Lidz == '':
            pirmdiena_No = 'Nestrāda'
        Otradiena_No = request.form['otradienas']
        Otradiena_Lidz = request.form['otradienas2']
        if Otradiena_No == '' and Otradiena_Lidz == '':
            Otradiena_No = 'Nestrāda'
        Trezdiena_No = request.form['tresdienas']
        Trezdiena_Lidz = request.form['tresdienas2']
        if Trezdiena_No == '' and Trezdiena_Lidz == '':
            Trezdiena_No = 'Nestrāda'
        Ceturdiena_NO = request.form['ceturdienas']
        Ceturdiena_Lidz = request.form['ceturdienas2']
        if Ceturdiena_NO == '' and Ceturdiena_Lidz == '':
            Ceturdiena_NO = 'Nestrāda'
        Piekdiena_No = request.form['piekdienas']
        Piekdiena_Lidz = request.form['piekdienas2']
        if Piekdiena_No == '' and Piekdiena_Lidz == '':
            Piekdiena_No = 'Nestrāda'
        Sesdiena_No = request.form['sestdienas']
        Sesdiena_Lidz = request.form['sestdienas2']
        if Sesdiena_No == '' and Sesdiena_Lidz == '':
            Sesdiena_No = 'Nestrāda'
        Svetdiena_No = request.form['svetdienas']
        Svetdiena_Lidz = request.form['svetdienas2']
        if Svetdiena_No == '' and Svetdiena_Lidz == '':
            Svetdiena_No = 'Nestrāda'
        Arsta_Bilde = request.files['file2']
        Arsta_Bilde_nosaukums = secure_filename(Arsta_Bilde.filename)

        Arsta_Bilde.save(os.path.join(
            app.config['UPLOAD_FOLDER_ARSTS'], Arsta_Bilde_nosaukums))

        arstu_saraksts = Arsti(Vards_uzvards=Vards_uzvards, Profesija=Profesija, pirmdiena_No=pirmdiena_No,
                               pirmdiena_Lidz=pirmdiena_Lidz, Otradiena_No=Otradiena_No,
                               Otradiena_Lidz=Otradiena_Lidz, Trezdiena_No=Trezdiena_No, Trezdiena_Lidz=Trezdiena_Lidz,
                               Ceturdiena_NO=Ceturdiena_NO, Ceturdiena_Lidz=Ceturdiena_Lidz,
                               Piekdiena_No=Piekdiena_No, Piekdiena_Lidz=Piekdiena_Lidz, Sesdiena_No=Sesdiena_No,
                               Sesdiena_Lidz=Sesdiena_Lidz, Svetdiena_No=Svetdiena_No,
                               Svetdiena_Lidz=Svetdiena_Lidz, id_slimnica=id_slimnica,
                               Arsta_Bilde_nosaukums=Arsta_Bilde_nosaukums)

        try:
            db.session.add(arstu_saraksts)
            db.session.commit()
            return redirect(request.url)

        except:
            return "Pievienojot Ārstu notika kļūda!"

    else:
        slimnica = Item.query.get(id)
        Ārsti = Arsti.query.filter(Arsti.id_slimnica == id)
        return render_template("arsti.html", slimnica=slimnica, Ārsti=Ārsti)


@app.route('/Ārstu/<int:id_arsts>/edit', methods=['POST', 'GET'])
@login_required
def Arsta_edit(id_arsts):
    Ārsta = Arsti.query.get(id_arsts)
    if request.method == 'POST':
        Ārsta.Vards_uzvards = request.form['Vards_uzvards']
        Ārsta.Profesija = request.form['Profesija']
        Ārsta.pirmdiena_No = request.form['Pirmdienas']
        Ārsta.pirmdiena_Lidz = request.form['Pirmdienas2']
        Ārsta.Otradiena_No = request.form['otradienas']
        Ārsta.Otradiena_Lidz = request.form['otradienas2']
        Ārsta.Trezdiena_No = request.form['tresdienas']
        Ārsta.Trezdiena_Lidz = request.form['tresdienas2']
        Ārsta.Ceturdiena_NO = request.form['ceturdienas']
        Ārsta.Ceturdiena_Lidz = request.form['ceturdienas2']
        Ārsta.Piekdiena_No = request.form['piekdienas']
        Ārsta.Piekdiena_Lidz = request.form['piekdienas2']
        Ārsta.Sesdiena_No = request.form['sestdienas']
        Ārsta.Sesdiena_Lidz = request.form['sestdienas2']
        Ārsta.Svetdiena_No = request.form['svetdienas']
        Ārsta.Svetdiena_Lidz = request.form['svetdienas2']

        try:
            db.session.commit()
            return redirect('/slimnicas')

        except:
            return "Redaktējot slimnīcu notika kļūda."

    else:
        Ārsts = Arsti.query.get(id_arsts)
        return render_template("Ārsta_edit.html", Ārsts=Ārsts)


@app.route('/Ārstu/<int:id_arsts>/apraksts', methods=['POST', 'GET'])
def Apraksts(id_arsts):
    Ārsts = Arsti.query.get(id_arsts)

    if request.method == 'POST':
        Vizītes_Nr1 = random.sample(range(10), 9)
        Vizītes_Nr = (''.join(map(str, Vizītes_Nr1)))
        id_arsts_piraksts = id_arsts
        Pieraksts_Vards_Uzvards = request.form['pacientavards']
        Vizītes_laiks = request.form['meeting-time']

        Cilvēku_pieraksts = Pieraksts(Vizītes_Nr=Vizītes_Nr, Pieraksts_Vards_Uzvards=Pieraksts_Vards_Uzvards,
                                      Vizītes_laiks=Vizītes_laiks, id_arsts_piraksts=id_arsts_piraksts)

        try:
            db.session.add(Cilvēku_pieraksts)
            db.session.commit()
            return redirect('/Ārstu/pieraksts/')
        except:
            return "Pie pieteikšanās notika kļūda!"
    else:
        return render_template("Apraksts.html", Ārsts=Ārsts)


@app.route('/Ārstu/<int:id_arsts>/del')
@login_required
def Ārsts_delete(id_arsts):
    Ārsts = Arsti.query.get_or_404(id_arsts)

    try:
        os.remove(os.path.join(app.config['UPLOAD_FOLDER_ARSTS'], Ārsts.Arsta_Bilde_nosaukums))
        db.session.delete(Ārsts)
        db.session.commit()
        return redirect('/slimnicas')

    except:
        return 'Dzēšot Ārstu notika kļūda!'


@app.route('/Ārstu/pieraksts/')
def pieraksts():
    pieraksts = Pieraksts.query.order_by(Pieraksts.id_pieraksts.desc()).first()
    Ārsti = Arsti.query.get(pieraksts.id_arsts_piraksts)
    slimnica = Item.query.get(Ārsti.id_slimnica)
    return render_template("Pieraksts.html", pieraksts=pieraksts, Ārsti=Ārsti, slimnica=slimnica)


@app.route('/Arstu/pieraksti/<int:id_arsts>')
def Pieraksti(id_arsts):
    pieraksts = Pieraksts.query.filter(Pieraksts.id_arsts_piraksts == id_arsts)
    return render_template("Pieraksti.html", pieraksts=pieraksts)


@app.route('/Arstu/pieraksti/<int:id_pieraksts>/del')
@login_required
def Pieraksts_delete(id_pieraksts):
    pieraksts = Pieraksts.query.get_or_404(id_pieraksts)

    try:
        db.session.delete(pieraksts)
        db.session.commit()
        return redirect(request.referrer)

    except:
        return 'Dzēšot Klienu notika kļūda!'


@app.route('/pieslegties', methods=['GET', 'POST'])
def login():
    login = request.form.get('login')
    password = request.form.get('password')

    if login and password:
        user = User.query.filter_by(login=login).first()

        if user and check_password_hash(user.password, password):
            login_user(user)

            return redirect('/')
        else:
            flash('Litotājvārds vai parole nav pareiza!')
    else:
        flash("Jūs neaizpildijāt abus laukus!")

    return render_template("Pieslegties.html")


@app.route('/register', methods=['GET', 'POST'])
def register():
    login = request.form.get('login')
    password = request.form.get('password')
    password2 = request.form.get('password2')

    if request.method == 'POST':
        if not (login or password):
            flash("Lūdzu, aizpildiet visas ailes!")
        elif password != password2:
            flash("Jums parole nav ievadītas vienādas!")
        else:
            hash = generate_password_hash(password)
            new_user = User(login=login, password=hash)
            db.session.add(new_user)
            db.session.commit()

            return redirect(url_for('login'))

    return render_template('Registreties.html')


@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect("/")


if __name__ == '__main__':
    app.run(debug=True)
