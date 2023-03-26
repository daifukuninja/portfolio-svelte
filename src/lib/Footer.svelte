<footer class="footer">
    <ul class="md-flex">
        <li><a href="#top">Top</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skillmaps-container">Skills / Chart</a></li>
        <li><a href="#timeline-top">Skills / Timeline</a></li>
        <li><a href="#zenn-container">Articles</a></li>
        <li><a href="#profile">Profile</a></li>
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

    .md-flex {
        column-count: 2;
    }

    .footer a:hover {
        color: #CCCCCC;
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
            margin-left: 48px;
        }
    }
</style>
