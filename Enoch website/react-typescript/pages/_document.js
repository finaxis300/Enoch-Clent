import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charset="utf-8" />
          <title>Ezerolabs</title>
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <meta
            name="Element Zero labs"
            content="Web site created using create-react-app"
          />
          {/* <script src="/static/js-dist.js"></script>
          <script src="/static/menu.js" type="text/javascript"></script> */}

          {/* <!-- Site Metas --></meta> */}

          <meta name="csrf_token" content="" />
          <meta property="type" content="website" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="_token" content="" />
          <meta name="robots" content="noodp" />

          <meta property="image" content="https://external-preview.redd.it/QB5Nv2dee5NmtpgFOxdjBrfp4MitMx_7OPoYVOLceVk.jpg?width=960&crop=smart&auto=webp&s=1fb548e43b8e5fe9b2fd7ba26af6da4221efcddb" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Element Zero labs" />
          <meta property="og:quote" content="Element Zero labs" />
          <meta property="og:hashtag" content="#Element Zero labs" />
          <meta
            property="og:image"
            content="https://external-preview.redd.it/QB5Nv2dee5NmtpgFOxdjBrfp4MitMx_7OPoYVOLceVk.jpg?width=960&crop=smart&auto=webp&s=1fb548e43b8e5fe9b2fd7ba26af6da4221efcddb"
          />
          <meta content="image/*" property="og:image:type" />

          <meta property="og:site_name" content="CampersTribe" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="My site" />
          <meta name="twitter:description" content="Description of my site." />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/images/header-bg.png"
          />
          <link href="/public/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Poppins&family=Roboto:wght@300;500&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;600;700&display=swap" rel="stylesheet"></link> */}
        </Head>{' '}
        <body>

          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

          <script src="/public/js/jquery.min.js"></script>
          {/* <script src="/static/jquery.min1.js"></script> */}
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
