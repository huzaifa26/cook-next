import AvailabilityCard from "@/components/Signup/AvailabilityCard";

export default function Page() {
  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px] px-[5.139vw]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Availability</h1>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div>
          <h2 className="font-rubik text-[20px] font-semibold leading-normal ">Choose your timezone</h2>
          <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] mt-[12px]">To get more students to your profile, we recommend a base price of $ per hour for new tutors in your subject and with your experience level.</p>
          <div className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px] mt-[20px]'>
            <p className='font-outfit text-[16px] font-medium leading-normal flex-1'>GMT +4</p>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
            </svg>
          </div>
        </div>

        <div className='flex flex-col gap-[45px] h-fit mt-[64px]'>
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-rubik text-[20px] font-semibold leading-normal ">COOK's commissions</h2>
            <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] ">Availability shows your potential working hours.</p>
          </div>

          <div className="flex flex-col gap-[38px]">
            <AvailabilityCard title={"Monday"}/>
            <AvailabilityCard title={"Tuesday"}/>
            <AvailabilityCard title={"Wednesday"}/>
            <AvailabilityCard title={"Thursday"}/>
            <AvailabilityCard title={"Friday"}/>
            <AvailabilityCard title={"Saturday"}/>
            <AvailabilityCard title={"Sunday"}/>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between'>
          <button className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
        </div>
      </div>
    </>
  )
}
