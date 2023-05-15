import Header from "./Header"
import Sidebar from "./Sidebar"

const ClientLayout = ({ children }: { children: any }) => (
    <div>
    <Sidebar />
    <div className="flex flex-1 flex-col md:pl-64">
        <main className="flex min-h-screen flex-1 flex-col">
            <Header />
            <div className="relative flex flex-1 bg-gray-100 items-stretch overflow-hidden">
                <div className="flex-1 overflow-y-auto pb-20">
                    <div className="mx-auto mt-6 w-full max-w-screen-2xl sm:px-6 md:px-8">
                        <div className="flex flex-col gap-6">
                            
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
      
  )
  
  export default ClientLayout