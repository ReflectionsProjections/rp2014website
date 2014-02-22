#----------------------------------------------------------------------------#
# Imports.
#----------------------------------------------------------------------------#
from flask import *
import logging
from logging import Formatter, FileHandler
import os
#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__, static_folder="public")

app.config.from_object('config')

#----------------------------------------------------------------------------#
# Controllers.
#----------------------------------------------------------------------------

@app.route('/')
def index():
    return render_template('pages/splash.html')

@app.route('/sponsor')
def sponsor():
    return render_template('pages/sponsorship.html')

# Error handlers.
@app.errorhandler(500)
def internal_error(error):
    return render_template('errors/500.html'), 500

@app.errorhandler(404)
def internal_error(error):
    return render_template('errors/404.html'), 404


#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

# Default port:

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)