var execSh = require('exec-sh')

// run interactive bash shell
execSh('ls', function (err) {
  if (err) {
    console.log('Exit code: ', err.code)
    return
  }

  // collect streams output
  execSh(['bash -c id', 'echo olaola >&2'], true,
    function (err, stdout, stderr) {
      console.log('error: ', err)
      console.log('stdout: ', stdout)
      console.log('stderr: ', stderr)
    })
})
