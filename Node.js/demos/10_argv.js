/*
  argv
  argv0
  execArgv
  execPath
*/


const { argv, argv0, execArgv, execPath } = process;

argv.frEach(item => {
  console.log(item)
})