export default function LocalListSkeleton() {
  return (
    <div className='bg-bg1 min-h-screen'>
      <div className='bg-bg2 border-bg3 sticky top-[72px] z-40 border-b px-4 py-4'>
        <div className='mx-auto max-w-[1400px]'>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className='bg-bg3 h-10 w-32 animate-pulse rounded-full' />
            ))}
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-[1400px] px-4 py-6'>
        <div className='flex gap-6'>
          <div className='bg-bg2 h-96 w-64 animate-pulse rounded-2xl' />
          
          <div className='flex-1'>
            <div className='bg-bg3 mb-6 h-12 w-full animate-pulse rounded-lg' />
            <div className='bg-bg3 mb-6 h-8 w-48 animate-pulse rounded' />
            
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className='bg-bg2 overflow-hidden rounded-2xl'>
                  <div className='bg-bg3 h-48 w-full animate-pulse' />
                  <div className='p-4 space-y-3'>
                    <div className='bg-bg3 h-6 w-3/4 animate-pulse rounded' />
                    <div className='bg-bg3 h-4 w-full animate-pulse rounded' />
                    <div className='bg-bg3 h-4 w-2/3 animate-pulse rounded' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}