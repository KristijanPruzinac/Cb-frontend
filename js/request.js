/*
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

/*
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
*/

/*HARDCODAN SERVER NA LOKALNOM WIFI*/
/* http://192.168.201.254:8080/ */
const base_url = "http://192.168.201.254:8080/";

async function AsyncPost(url, json) {
    try {
        const response = await fetch(base_url + url, {
            method: "POST",
            body: JSON.stringify(json), // Use the passed JSON data
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to post data to server");
        }
        
        const responseBody = await response.text();
        console.log(responseBody);
        
        return responseBody;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
}

async function AsyncGet(url) {
    try {
        const response = await fetch(base_url + url, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Failed to post data to server");
        }

        // Get the response content
        const content = await response.body;
        
        // Assuming your server returns "1" for success and "0" for failure
        if (content === "1") {
            console.log("Server response: Success");
        } else if (content === "0") {
            console.log("Server response: Failure");
        } else {
            console.log("Unexpected server response:", content);
        }
        
        // Optionally, you can return the response content if needed
        return content;
    } catch (error) {
        console.error("Error getting data:", error);
        throw error; // Re-throw the error for handling elsewhere if needed
    }
}