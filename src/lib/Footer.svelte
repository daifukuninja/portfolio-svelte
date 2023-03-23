<footer class="footer">
    <ul class="md-flex">
        <li><a href={null}>About</a></li>
        <li><a href={null}>サイトマップ</a></li>
        <li><a href={null}>プライバシーポリシー</a></li>
    </ul>
    <p class="copyright">© 2023 MIHARA Keishi / Contribe Co.,Ltd</p>
</footer>

<style>
    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .footer {
        padding: 2rem;
        font-size: 15px;
        color: #FFFFFF;
        background: #110011;
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
