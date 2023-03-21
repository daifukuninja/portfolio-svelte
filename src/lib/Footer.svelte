<footer class="footer">
    <ul class="md-flex">
        <li><a href="#">About</a></li>
        <li><a href="#">サイトマップ</a></li>
        <li><a href="#">プライバシーポリシー</a></li>
    </ul>
    <p class="copyright">© 2023 Example Inc. All Rights Reserved.</p>
</footer>

<style>
    a {
        color: #999;
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .footer {
        padding: 2rem;
        font-size: 15px;
        color: #999;
        background: #fff;
        border-top: 1px solid #e5e7eb;
    }

    .footer a:hover {
        color: #000;
    }

    @media (min-width: 768px) {
        .footer {
            display: flex;
            justify-content: space-between;
        }

        .md-flex {
            display: flex;
        }

        .md-flex li + li {
            margin-left: 16px;
        }
    }
</style>
