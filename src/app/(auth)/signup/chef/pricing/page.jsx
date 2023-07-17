import AvailabilityCard from "@/components/Signup/AvailabilityCard";

export default function Page() {
  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px] px-[5.139vw]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Pricing</h1>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div>
          <h2 className="font-rubik text-[20px] font-semibold leading-normal ">Set your hourly rate</h2>
          <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] mt-[12px]">Having the right timezone is crucial for effectively organizing lessons with students from around the world.</p>
          <div className="flex items-center gap-[12px]">
            <input className="!w-[102px] h-[38px] p-[9px] flex justify-center items-center font-outfit text-[16px] font-medium leading-normal border border-primaryLighten2 outline-primary2 text-center" placeholder="20" type="number" />
            <p className="font-outfit font-medium leading-normal text-[16px]">$</p>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between'>
          <button className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Finish</button>
        </div>
      </div>
    </>
  )
}
