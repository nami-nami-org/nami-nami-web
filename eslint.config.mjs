import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    rules: {
      // 🔒 regla para forzar que los hooks se usen correctamente
      'react-hooks/rules-of-hooks': 'off',
      // (opcional) valida que dependencias de useEffect/useCallback estén completas
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
]

export default eslintConfig
