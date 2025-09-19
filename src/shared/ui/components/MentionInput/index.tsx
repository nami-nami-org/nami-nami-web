import dynamic from 'next/dynamic'

const MentionInput = dynamic(() => import('./ClientMentionInput'), {
  ssr: false,
  loading() {
    return <h3 className='text-fn2 w-[500px]'>Escribe un platillo...</h3>
  }
})

export default MentionInput
