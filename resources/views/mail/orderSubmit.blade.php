<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            font-family: Philosopher;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }


        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        @media screen and (max-width: 480px) {
            .mobile-hide {
                display: none !important;
            }

            .mobile-center {
                text-align: center !important;
            }
        }

        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>

<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">

    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">

                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                    style="max-width:600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 10px;">
                            <div>
                                <table>
                                    <tr>
                                        <td>
                                            {{-- <img src=" {{ $message->embed(public_path() . '/assets/Kodeline Kids Logo.png') }} "
                                                width="240" style="display: block; border: 0px;" alt="Kodeline Kids"> --}}
                                            <h2
                                                class="font-size: 28px; font-weight: 800; line-height: 36px; color: #000;">
                                                Kodeline Kids</h2>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 10px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center"
                                        style="font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                        <h2
                                            style="font-size: 24px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                            Thank You For Your Order!
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                        <p
                                            style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                                            {{-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste
                                            ipsa numquam odio dolores, nam. --}}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left" bgcolor="#eeeeee"
                                                    style="font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                    Order Confirmation #
                                                </td>
                                                <td width="25%" align="left" bgcolor="#eeeeee"
                                                    style="font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                    {{ $order->order_id }}
                                                </td>
                                            </tr>
                                            @php
                                                // Convert the exploded arrays to integers
                                                $productID = array_map('intval', explode('|', $order->product_id));
                                                $attribute_id = array_map('intval', explode('|', $order->attribute_id));
                                                $variantIndex = array_map('intval', explode('|', $order->variantIndex));
                                                $product_quantity = array_map(
                                                    'intval',
                                                    explode('|', $order->product_quantity),
                                                );
                                                $product_name = explode('|', $order->product_name);
                                            @endphp

                                            @foreach ($product_quantity as $i => $PurchaseItem)
                                                <tr>
                                                    <td width="75%" align="left"
                                                        style="font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                                        {{ $product_name[$i] }}
                                                    </td>
                                                    <td width="25%" align="left"
                                                        style="font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                                        Qty: {{ $PurchaseItem }}
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding-top: 20px;">
                                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td width="75%" align="left"
                                                    style="font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                                    TOTAL
                                                </td>
                                                <td width="25%" align="left"
                                                    style="font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                                    ${{ $order->total_price }}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" height="100%" valign="top" width="100%"
                            style="padding: 20px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:660px;">
                                <tr>
                                    <td align="left" valign="top" style="font-size:0;">
                                        <div
                                            style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">

                                            <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                width="100%" style="max-width:300px;">
                                                <tr>
                                                    <td align="left" valign="top"
                                                        style="font-size: 16px; font-weight: 400; line-height: 24px;">
                                                        <p style="font-weight: 800;">Delivery Address</p>
                                                        <p>{{ $order->address }}
                                                            <br>
                                                            phone:
                                                            {{ $order->phonenumber }}
                                                        </p>

                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        {{-- <div
                                            style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                            <table align="left" border="0" cellpadding="0" cellspacing="0"
                                                width="100%" style="max-width:300px;">
                                                <tr>
                                                    <td align="left" valign="top"
                                                        style="font-size: 16px; font-weight: 400; line-height: 24px;">
                                                        <p style="font-weight: 800;">Estimated Delivery Date</p>
                                                        <p>January 1st, 2016</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div> --}}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center" style="font-size: 14px; font-weight: 400; line-height: 24px;">
                                        <p
                                            style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                                            For any queries, please contact us at 306-541-9905.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center" style="font-size: 14px; font-weight: 400; line-height: 24px;">
                                        <p
                                            style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                                            Copyrights © 2024 Kodeline Cothing and Footwear Inc. An initiative of
                                            MapleKode Creatives Inc.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>

</html>
