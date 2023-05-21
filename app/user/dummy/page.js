"use client"
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Dummy() {
    const submitHandler = () => {
        fetch('/dummy')
        .then(response => {
            if (!response.ok) {
            throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            // Process the response data
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
    });

    }
    return (
        <Wrapper>
            <div className=" flex flex-col gap-10 items-start justify-center">
              <h2 className="text-4xl font-bold dark:text-white">Generate Dummy data for the database</h2>

        <button onClick={submitHandler} type="button" className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Generate Dummy 
        </button>
</div>
        </Wrapper>

    )
}


