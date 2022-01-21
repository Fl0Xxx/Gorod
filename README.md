# Web-app "Gorod"
Actual version: [0.0.2]

## Prerequisites to run the project.
### Windows:
0. Install python.
Using Powershell:
1. Go to the project folder
>cd ./Gorod
2. Set up a virtual environment
> py -m venv .
3. Run activate
> ./Scripts/activate.bat
4. Install Django
> py -m pip install Django
Install libraries:
> pip install django-crispy-forms
> pip install mysqlclient
> pip install psycopg2-binary
> pip install psycopg2
5. Run django server
> py manage.py runserver

### Links:
https://docs.djangoproject.com/

## Database information
To use MySQL or PostgreSQL DB:
- edit gorod/setting.py file

## Known issues:
**Error** - **Solution:**
1. OSError: [WinError 123] Синтаксическая ошибка в имени файла, имени папки или метке тома: frozen importlib._bootstrap  
Run command 
> pip install django-crispy-forms

