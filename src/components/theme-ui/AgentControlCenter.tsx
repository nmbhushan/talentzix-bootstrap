import ProgressBar from "@/components/theme-ui/progress-bar";
const agent: Agent[] = [
    {
        id: '1',
        title: 'JobCraft AI #1',
        status: 'Active - Processing Job Posts',
        progress: '75',
    },
    {
        id: '1',
        title: 'JobCraft AI #2',
        status: 'Active - Processing Job Posts',
        progress: '72',
    },
    {
        id: '1',
        title: 'JobCraft AI #3',
        status: 'Active - Processing Job Posts',
        progress: '75',
    },
]
export const AgentControlCenter = () => {
  return (
    <section
      className=""
    >
      <div className="container pt-12 pb-5">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 flex text-center justify-center">
              <div className="max-w-[700px] mx-auto mb-3">
                  <h2 className="text-[24px] md:text-[35px] capitalize leading-tight text-[#17012C] font-semibold">
                    Agent Control Center
                  </h2>
                  <p className="mt-4 text-[#504E4E] text-[14px] font-medium leading-normal pb-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
              </div>
            </div>
            {agent.map((agent, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
                <div className="p-4 bg-[#E8F2FF] rounded-[14px] space-y-3">
                    <h5 className="text-[22px] font-medium text-[#181A20] mb-0">{agent.title}</h5>
                    <p className="text-[18px] font-normal text-[#717171] !mb-5">{agent.status}</p>
                    <ProgressBar/>
                </div>
            </div>
            ))}
          </div>
      </div>
    </section>
  );
};
export default AgentControlCenter;