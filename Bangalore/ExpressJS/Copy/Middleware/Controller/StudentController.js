
function studentHome(req,res)
{
    res.end("<h1>This is Student Home Page</h1>")
}

function studentAbout(req,res)
{
    res.end("<h1>This is Student Home Page</>")
}

module.exports={studentHome,studentAbout};