import { metroStatus } from '../source'

test('get metro status', async () => {
  const data = await metroStatus()
  expect(data.length).toBeGreaterThan(0)
})
