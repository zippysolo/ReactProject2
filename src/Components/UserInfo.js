
function UserInfo(props) {
    return (
        <div class="user-nav">
            <div class="user-info">
                <span class="user-name">{props.userName}</span>
                <span>Log Out</span>
            </div>
        </div>
    );

}

export default UserInfo;

