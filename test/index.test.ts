import { pretos } from '../source'

test('pretos', () => {
  const [expression] = pretos
  const {
    term: {
      title: { slug, formatted },
      description,
    },
    replacements,
  } = expression

  expect(pretos.length).toBeGreaterThan(0)
  expect(slug).toBeTruthy()
  expect(formatted).toBeTruthy()
  expect(description).toBeTruthy()
  expect(replacements.length).toBeGreaterThan(0)
})
