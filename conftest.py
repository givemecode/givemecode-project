# coding: utf-8
import sys
from unipath import Path


sys.path.insert(0, Path(__file__).parent)


def pytest_configure(config):
    from django.conf import settings
    
        settings.INSTALLED_APPS = filter(lambda s: s != 'devserver', settings.INSTALLED_APPS)