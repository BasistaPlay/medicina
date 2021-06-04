from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def Sakums():
  return render_template("sakums.html")


@app.route('/slimnicas')
def slimnicas():
  return render_template("slimnicas.html")

@app.route('/pacientiem')
def pacientiem():
  return render_template("pacientiem.html")

@app.route('/kontakti')
def Kontakti():
  return render_template("kontakti.html")

@app.route('/slimnicas/arsti')
def arsti():
  return render_template("arsti.html")


app.run(host='0.0.0.0', port=8080)