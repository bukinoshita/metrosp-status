'use strict'

import test from 'ava'
import m from '.'

test('get lines', async t => {
  const lines = await m()

  t.is(lines.length, 6)
})
