/** @type {import('@commitlint/types').UserConfig} */

const config = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'emoji-in-subject': [2, 'always'],
    'header-max-length': [2, 'always', 200]
  },

  plugins: [
    {
      rules: {
        'emoji-in-subject': ({ header }: { header: string }) => {
          const valid = /^.+:\s((:[a-z0-9_+:-]+:)|(\p{Emoji}))/u.test(header)
          return [valid, '❌ Falta gitmoji después del subject. Ej: "feat: :fire: commit" o "fix: 🐛 commit"']
        }
      }
    }
  ]
}

export default config
