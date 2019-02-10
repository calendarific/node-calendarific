'use strict'

// npm
import pify from 'pify'
import test from 'ava'

// self
import fnImp from './'

const fn = pify(fnImp)

const expected = ['holidays']

