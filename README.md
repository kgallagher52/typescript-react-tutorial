# typescript-react-tutorial
Project covers Typescript and React and how they work together. This is more for learning and as a reference then anything else.


### Commands
    1.npx concurrently -k -n COMPILER,NODEMON -c blue,yellow  "tsc -w" "nodemon -q public/index"
        - concurrently: This will run both processes at the same time.
        - -k: Tells concurrently that if one task fails exit all tasks
        - -n COMPILER,NODEMON: This will name the processes in the terminal
        - -c blue,yellow: This colors each task