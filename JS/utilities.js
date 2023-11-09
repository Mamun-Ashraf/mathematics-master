// {/* <div id="modal" class="fixed z-10 inset-0 overflow-y-auto hidden">
//     <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         {/* <!-- Background overlay --> */}
//         <div class="fixed inset-0 transition-opacity" aria-hidden="true">
//             <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>

//         {/* <!-- Modal content --> */}

//     </div>
// </div> */}



const modal = document.getElementById('indexModal');

document.getElementById('closeIndexButton').addEventListener('click', function () {
    modal.classList.add('hidden');
});

document.getElementById('openIndexButton').addEventListener('click', function () {
    modal.classList.remove('hidden');
});

// {/* <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//             <div class="bg-white p-4">
//                 {/* <!-- Modal content goes here --> */}
//                 <h2 class="text-lg font-semibold">Modal Title</h2>
//                 <p>Modal content goes here.</p>
//             </div>
//             <div class="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button id="closeModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
//                     Close
//                 </button>
//             </div>
//         </div> */}