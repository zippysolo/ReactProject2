<?
class User()
{
    private $userName;
    private $password;
    private $userID;
    private $percent;

    public function __construct(string $userName, string $password) {
            $this->userName = $userName;
            $this->password = $password;
}


function setUserName(string $userName) 
{
    $this->userName = $userName;
}

function setPassword(string $password) 
{
    $this->password = $password;
}


function getUserName()
{
    return $this->userName;
}

function getPassword()
{
    return $this->password;
}

}

?>