"use client"
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
// import { useRouter } from "next/navigation";

function Profile() {
  // const router = useRouter()
  
  // if (isLoaded && !isSignedIn) {
  //   router.push('/',{ shallow: true })
  // }

  return (
    <>
  <Wrapper>
      <section className="pt-16 bg-blueGray-50 ">
        <div className="w-full px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 dark:border-gray-700  dark:text-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                  <Image
                    width={150}
                    height={150}
                  alt={`Emmanuel Allan`}
                  src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Songs</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Emmanuel Allan
                </h3>
               
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    In the realm of music, there exists a captivating soul, a musician whose essence resonates with the depths of emotion and the beauty of expression. With every note that dances upon the air, this artist weaves a tapestry of sound, inviting us into a world of poetic enchantment.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
      </>
  );
}

export default Profile;
