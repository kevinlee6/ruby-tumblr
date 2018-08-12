const forgotBtn = document.getElementById('forgot-btn'),
      registerBtn = document.getElementById('register-btn'),
      userInfo = document.getElementById('user-info');

const backHandler = () => {
    userInfo.innerHTML = login;
};

const registerHandler = () => {
    userInfo.innerHTML = register;
};

const register =
    `<div id="user-modal-header" class="modal-header">
      <button class="btn btn-secondary" onclick='backHandler()'><i class="fas fa-chevron-left"></i></button>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form id="login-form" action="/register" method="post">
            <span>
              Create your username: <input type="text" name="username" placeholder="Enter your username"/>
            </span>
            <span>
              Create your password: <input type="text" name="password" placeholder="Enter your password"/>
            </span>
            <span>
              Re-enter your password: <input type="text" name="password-reenter" placeholder="Re-enter your password"/>
            </span>
            <span>
              Enter your email: <input type="text" name="email" placeholder="Enter your email"/>
            </span>
            <input class="btn btn-primary" id="user-info-btn" type="submit" value="Sign up">
        </form>
    </div>`;

const login =
    `<div id="user-modal-header" class="modal-header">
      <h5 class="modal-title" id="loginModalLabel">Log In</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <form id="login-form" action="/" method="post">
            <span>
              Username: <input type="text" name="username" placeholder="Enter your username"/>
            </span>
            <span>
              Password: <input type="text" name="password" placeholder="Enter your password"/>
            </span>
            <input class="btn btn-primary" id="user-info-btn" type="submit" value="Log In">
        </form>
    </div>
    <div class="modal-footer">
      <button id="forgot-btn" type="button" class="btn btn-info" data-dismiss="modal">Forgot username / password</button>
      or
      <button onclick="registerHandler()" id="register-btn" type="button" class="btn btn-info">Sign up</button>
    </div>`;