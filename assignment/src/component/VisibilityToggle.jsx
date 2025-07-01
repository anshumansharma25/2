import { useState } from "react"

export default function () {
  const [visible, setVisibilty] = useState(false);


    return (
      <div className="h-screen w-screen bg-gray-100 flex justify-center items-center text-black">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6">
          <button
            onClick={() => setVisibilty(!visible)}
            className={`text-white p-4 rounded-xl ${
              !visible ? "bg-green-400" : "bg-red-500"
            }`}
          >
            {visible ? "Hide Paragraph" : "Show Paragraph"}
          </button>

          <p
            className={`${
              visible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-600 overflow-hidden`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quis ipsa! Labore delectus tempora saepe voluptatum ipsa, optio fugiat obcaecati magni dolorem ea eum nostrum, esse soluta nulla voluptatem sed?
            Quisquam repellendus omnis odio? Incidunt deserunt quia odio perspiciatis deleniti illum molestias obcaecati dolores ex. Asperiores obcaecati ad repellendus et possimus voluptates nihil libero vero aut veritatis, dolor, ut harum!
            Corrupti, fuga illo in similique, ullam non consectetur sunt neque, animi nisi facilis error harum. Enim nesciunt blanditiis veritatis iste dolor, distinctio cupiditate explicabo veniam? Ut, debitis aut. Maxime, tenetur?
            Quod nisi temporibus doloribus numquam soluta veritatis minima sint ea! Earum delectus beatae distinctio perspiciatis ipsa, at repellat consequuntur blanditiis libero praesentium quo commodi qui nulla nisi ipsam voluptatibus nemo.
          </p>
        </div>
      </div>
    );
}
