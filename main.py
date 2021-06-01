from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def Sākums():
  return render_template("Sakums.html")


@app.route('/Slimnicas')
def Slimnīcas():
  return render_template("Slimnicas.html")

@app.route('/Pacientiem')
def Pacientiem():
  return render_template("Pacientiem.html")

@app.route('/Kontakti')
def Kontakti():
  return render_template("Kontakti.html")


app.run(host='0.0.0.0', port=8080)