import type { FC, JSX, ReactNode } from 'react'
import { Mention, MentionsInput, MentionsInputProps, SuggestionDataItem, SuggestionFunc } from 'react-mentions'

import Button from '../Button'
import './style.css'

type RenderSuggestion = (suggestion: any, focused: boolean, index: number) => JSX.Element

type Props = Omit<MentionsInputProps, 'children' | 'onChange' | 'value'> & {
  children?: ReactNode | ReactNode[]
  data: SuggestionDataItem[]
  trigger?: string
  mentionClassName?: string
  displayTransform?: (id: string, display: string) => string
  renderSuggestion?: RenderSuggestion
  query: string
  onChange: (query: string) => void
}

const ClientMentionInput: FC<Props> = ({
  className,
  data,
  trigger = '@',
  mentionClassName = '',
  query,
  onChange,
  renderSuggestion,
  displayTransform,
  ...props
}) => {
  const Suggestion: SuggestionFunc = (suggestion, _, highlightedDisplay, __, focused) => (
    <Button key={suggestion.id} className={`w-full ${focused ? 'bg-tn1 text-fnA' : 'bg-bg2 text-fn1'}`}>
      <h4>{highlightedDisplay}</h4>
    </Button>
  )

  return (
    <MentionsInput
      value={query}
      onChange={(_, value) => onChange(value)}
      placeholder='Escribe un platillo...'
      className={`mentions ${className} text-h3`}
      suggestionsPortalHost={document.body}
      allowSpaceInQuery
      allowSuggestionsAboveCursor
      ignoreAccents
      customSuggestionsContainer={children => <div className='max-h-[200px] overflow-y-scroll rounded-md p-2.5'>{children}</div>}
      {...props}
    >
      <Mention
        data={data}
        trigger={trigger}
        displayTransform={displayTransform || ((id, display) => `@${display}`)}
        className={mentionClassName}
        markup='@[__display__](id:__id__)'
        renderSuggestion={
          !renderSuggestion
            ? Suggestion
            : (suggestion, search, highlightedDisplay, index, focused) => {
                return renderSuggestion(suggestion, focused, index)
              }
        }
        appendSpaceOnAdd={true}
      />
    </MentionsInput>
  )
}

export default ClientMentionInput
