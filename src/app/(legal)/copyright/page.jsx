import CopyrightTable from '../../../components/Copyright/CopyrightTable'

export default function Copyright (){
  return (
      <div className='flex xsm:flex-col sm:flex-col md:flex-col xsm:gap-[36px] sm:gap-[36px] md:gap-[36px] gap-[54px] pl-[64px] py-[94px] pr-[69px] sm:pt-[89px] md:pt-[89px] sm:px-[48px] md:px-[48px] xsm:pt-[80px] xsm:pr-[32px] xsm:pl-[34px]'>
        <div className='mt-[10px] h-full sticky md:relative sm:relative xsm:relative md:top-[0px] sm:top-[0px] xsm:top-[0px] top-[130px]'>
          <h1 className='mb-[36px] hidden sm:block md:block xsm:block text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Terms Of Service</h1>
          <div className='relative mb-[30px] h-[50px] w-[313px] xsm:w-full sm:w-full md:w-full border-[2px] rounded-[4px] border-primaryLighten2 pl-[36px] pr-[10px]'>
            <input type="text" className='h-full w-full outline-none font-medium leading-[26.46px] font-outfit placeholder:text-primary2 pl-4 text-[20px]' placeholder="Search" />
            <svg className='absolute top-[50%] left-[13px] transform translate-y-[-50%]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 20.9999L16.65 16.6499" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='flex p-[24px] w-[313px] xsm:w-full sm:w-full md:w-full flex-col border-[2px] rounded-[8px] border-primaryLighten2'>
            <h1 className='mb-[27px] tracking-[-0.02em] font-outfit leading-[28.4px] font-[600] text-[24px] xsm:text-[20px]'>Table of content</h1>
            <div className='flex flex-col gap-[16px]'>
              <CopyrightTable />
              <CopyrightTable />
              <CopyrightTable />
            </div>
          </div>
        </div>
        <div className='flex flex-col xsm:w-full sm:w-full md:w-full'>
          <h1 className='mb-[36px] mt-[-10px] block sm:hidden md:hidden xsm:hidden text-[48px] xsm:text-[36px] font-[700] sm:leading-[56.88px] font-rubik'>Copyright Policy</h1>
          <div className='w-[59px] rounded-full border-[2px] mb-[36px] xsm:hidden sm:hidden md:hidden border-primaryLighten2'></div>
          <div className='flex flex-col gap-[36px]'>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
            <div className='flex flex-col gap-[14px]'>
              <h2 className='font-rubik font-[500] text-[28px] leading-[33.1px] xsm:text-[24px] xsm:leading-[28.44px]'>General Terms</h2>
              <p className='font-outfit text-TextColorSec text-[16px] leading-[24.72px]'>Lorem ipsum dolor sit amet consectetur. Sed sed purus turpis donec gravida. Molestie ipsum amet praesent venenatis. Augue proin erat id in amet venenatis in. Quam posuere sapien fermentum ac. Risus erat enim lacinia aenean ornare. Interdum augue eu et scelerisque. Facilisis proin lacus amet nibh tempor. Curabitur purus vitae nisl eget sem. Enim integer libero egestas amet fermentum egestas orci imperdiet in. Amet nunc urna nunc lobortis cras fermentum et at pretium. Facilisi non nunc dui iaculis risus fusce et faucibus at. Ornare aliquam scelerisque dui viverra donec turpis. Egestas sit pretium turpis amet proin.</p>
            </div>
          </div>
        </div>
      </div>
  )
}