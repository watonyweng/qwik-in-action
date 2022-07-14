import { describe, expect, it } from 'vitest'

import { plus } from '../src/index'

describe('should', () => {
  it('plus number', () => {
    expect(plus(1, 2)).toEqual(3)
  })
})
