<?
require 'Database.php';
class Donation()
{
    private $donationID;
    private $userID;
    private $date;
    private $amount;
    private $company;
    private $category;

    public function __construct(Database $db, string $donationID, string $userID, string $date, string $amount, string $company, string $category) {
        $db->query()
            
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