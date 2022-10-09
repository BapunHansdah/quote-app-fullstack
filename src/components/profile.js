export default function Profile(){
  return(
  	  <div className="grid gap-2">
			  	    <div className="flex flex-col gap-2 p-20 border-2">
			  	       <div className="w-32 h-32">
			  	         <img className="w-32 h-32 rounded-full object-cover" src="https://cdn.arstechnica.net/wp-content/uploads/2022/06/getty-musk-800x560.jpg"/>
				  	     </div>
				  	     <div className="flex gap-2">
					  	     <div className="grid gap-2">
					  	     	  <div className="h-10 p-2 text-white bg-black">Name</div>
					  	     	  <div className="h-10 p-2 text-white bg-black">Email</div>
					  	     </div>
					  	     <div className="grid gap-2">
					  	     	  <div className="h-10 p-2 border-2">Bapun Hansdah</div>
					  	     	  <div className="h-10 p-2 border-2">barunhansdah4@gmail.com</div>
					  	     </div>
				  	     </div>
			  	    </div>
  	    	    <div className="grid border-2 justify-items-center gap-2 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1">
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
		              <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
			  	        <div className="h-32 lg:w-64 lg:w-64 md:w-9/12  border-2 text-white">Quote 1</div>
  	  	     </div>
  	  </div>
  	)
}