const phone = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_567)">
<circle opacity="0.16" cx="15" cy="14.9999" r="15" fill="#696CFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.425 7.99994H18.425C19.1971 7.99994 19.825 8.62784 19.825 9.39994V20.5999C19.825 21.372 19.1971 21.9999 18.425 21.9999H11.425C10.6529 21.9999 10.025 21.372 10.025 20.5999V9.39994C10.025 8.62784 10.6529 7.99994 11.425 7.99994ZM11.425 9.39994V20.5999H18.4264L18.425 9.39994H11.425ZM14.925 19.8999C15.3116 19.8999 15.625 19.5865 15.625 19.1999C15.625 18.8133 15.3116 18.4999 14.925 18.4999C14.5384 18.4999 14.225 18.8133 14.225 19.1999C14.225 19.5865 14.5384 19.8999 14.925 19.8999Z" fill="#696CFF"/>
</g>
<defs>
<clipPath id="clip0_2_567">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`
const mouse = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_502)">
<circle opacity="0.16" cx="15" cy="14.9999" r="15" fill="#FFAB00"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 7.99988H14.2C11.8837 7.99988 9.99997 9.88358 9.99997 12.1999V17.7999C9.99997 20.1162 11.8837 21.9999 14.2 21.9999H15.6C17.9163 21.9999 19.8 20.1162 19.8 17.7999V14.9999V13.5999V12.1999C19.8 9.88358 17.9163 7.99988 15.6 7.99988ZM14.2 9.39988V13.5999H11.4V12.1999C11.4 10.6557 12.6558 9.39988 14.2 9.39988ZM18.4 17.7999C18.4 19.3441 17.1442 20.5999 15.6 20.5999H14.2C12.6558 20.5999 11.4 19.3441 11.4 17.7999V14.9999H18.4V17.7999ZM15.6 13.5999V9.39988C17.1442 9.39988 18.4 10.6557 18.4 12.1999V13.5999H15.6Z" fill="#FFAB00"/>
</g>
<defs>
<clipPath id="clip0_2_502">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`
const computer = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_472)">
<circle opacity="0.16" cx="15" cy="14.9999" r="15" fill="#03C3EC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6 8.34985H9.39997C8.62787 8.34985 7.99997 8.97775 7.99997 9.74985V17.4499C7.99997 18.222 8.62787 18.8499 9.39997 18.8499H14.3V20.2499H12.2V21.6499H14.3H15.7H17.8V20.2499H15.7V18.8499H20.6C21.3721 18.8499 22 18.222 22 17.4499V9.74985C22 8.97775 21.3721 8.34985 20.6 8.34985ZM9.39997 16.0499V9.74985H20.6L20.6014 16.0499H9.39997Z" fill="#03C3EC"/>
</g>
<defs>
<clipPath id="clip0_2_472">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`
const smartTV = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_378)">
<circle opacity="0.16" cx="15" cy="14.9999" r="15" fill="#FF3E1D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6 10.7999H16.6898L18.2949 9.19476L17.3051 8.20496L15 10.5101L12.6949 8.20496L11.7051 9.19476L13.3102 10.7999H9.39997C8.62787 10.7999 7.99997 11.4278 7.99997 12.1999V19.8999C7.99997 20.672 8.62787 21.2999 9.39997 21.2999H20.6C21.3721 21.2999 22 20.672 22 19.8999V12.1999C22 11.4278 21.3721 10.7999 20.6 10.7999ZM9.39997 19.8999V12.1999H20.6L20.6014 19.8999H9.39997Z" fill="#FF3E1D"/>
</g>
<defs>
<clipPath id="clip0_2_378">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
`
const productItem = [
    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/201391/oneplus-7-pro-1-600x600.jpg',
        name: 'OnePlus 7Pro',
        platform: 'OnePlus',
        icon: phone,
        category: 'Smart Phone',
        payment: 120,
        money: 499,
        paymentText: 'Partially Paid',
        orderStatus: 0,
    },
    {
        img: 'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/VuTT29/02-Magic-Mouse-2-2022-02.jpg',
        name: 'Magic Mouse',
        platform: 'Apple',
        icon: mouse,
        category: 'Mouse',
        payment: 149,
        money: null,
        paymentText: 'Fully Paid',
        orderStatus: 1,
    },
    {
        img: 'https://help.apple.com/assets/5E9759AA680CE290321CE8C3/5EB1FE800946224832B512EE/en_US/9247a5db6d700a8824178ade71edfe3e.png',
        name: 'iMac Pro',
        platform: 'Apple',
        icon: computer,
        category: 'Computer',
        payment: 0,
        money: 899,
        paymentText: 'Unpaid',
        orderStatus: 2,
    },
    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg',
        name: 'Note 10',
        platform: 'Samsung',
        icon: phone,
        category: 'Smart Phone',
        payment: 149,
        money: null,
        paymentText: 'Fully Paid',
        orderStatus: 1,
    },
    {
        img: 'https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-vang-600x600-200x200.jpg',
        name: 'iPhone 11 Pro',
        platform: 'Apple',
        icon: phone,
        category: 'Smart Phone',
        payment: 399,
        money: null,
        paymentText: 'Fully Paid',
        orderStatus: 1,
    },
    {
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUExcVFBUXGBcXGxkbGBcaGhkgGRocIRoZGBkbGBkaIiwjIhwoIBkZJDUkLC0vMjIyGiI4PToxPCwxMjEBCwsLDw4PHRERHTooIikxNDMxMTEzMTExMTMxLzExMTEvMTEzMTExMTMxMTExMTExMTExMTExMTExMTExMTExOv/AABEIALABHgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcBAgj/xABMEAABAwEEBAUOCwgCAwEAAAABAgMRAAQSITEFBkFREyJhcZEHFBYXMlWBkpOhsbLS0yM0NVJTY3ODs9HwFTNCQ2JydMHh8SSiwoL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgIBAwMDAgYDAAAAAAAAAAECERIDITEEE1FBYXEikRQyQlKBoQUj0f/aAAwDAQACEQMRAD8AOuqU+tvRj6m1KQocHCkkgj4RIwIxoIserFqcbbc/ab4voSqIWYvJConheWjPqp/JT/3f4iKj6H+LM/ZNeomrxRWTBrsRtXfR/wAVfvaXYjau+j/ir97RjSqcUVtgd2I2rvo/4q/e0uxG1d9H/FX72jGlTFC2B3Yjau+j/ir97S7EbV30f8VfvaMaVMULYHdiNq76P+Kv3tLsRtXfR/xV+9oxpUxQtgd2I2rvo/4q/e0uxG1d9H/FX72jGlTFC2B3Yjau+j/ir97S7EbV30f8VfvaMaVMULYHdiNq76P+Kv3tLsRtXfR/xV+9oxpUxQtgd2I2rvo/4q/e0uxG1d9H/FX72jGlTFC2B3Yjau+j/ir97S7EbV30f8VfvaMaVMULYHdiNq76P+Kv3tLsRtXfR/xV+9oxpUxQtgd2I2rvo/4q/e0uxG1d9H/FX72jGlTFC2B3Yjau+j/ir97S7EbV30f8VfvaMaVMULYHdiNq76P+Kv3tLsRtXfR/xV+9oxpUxQtgd2I2rvo/4q/e0uxG1d9H/FX72jGlTFC2B3Yjau+j/ir97S7EbV30f8VfvaMabfZC4k5UxQtgl2I2rvo/4q/e0uxG1d9H/FX72i9aAYnZXSimKFsz3S+jbTY12ZRt7zgcfabKSVpEE3jPwhnuYjlrbqyfX0QLD/mM+hVaxVZF1wCHVT+Sn/u/xEVH0P8AFmfsmvUTUjqp/JT/AN3+Iio+h/izP2TXqJqYESJlRH7XdURKQAU4HulTtTzT5jlUuuKQCIIBG41cqdqBbbeptZSGyoBIVIOEkOmDt/ljIHPmmwFcoCnc0wsTDRIhRvA8UwlxWcTjcTG8LnZVnZXb6EqMYjYQR0gkeenZpUAqZceIJwmBP+h/vop6lQHEEkYiDXaVKgI5tBmIjGJ2RKsf/Wudcn5sRn6MN+IV5qk0qAVKlSoCOm0n5sZZ8s5dFLrg4cWJIGP/AOpz5U1IpUAq4swCa7SoBnhTjhlG3DHnrybSfm+E/qeSpFKgGm3SVEXYicfDH507SpUA26sgiBM58mIH+6bTaTAw2TnyE/689SKVARzaTPc+HdiBj017aevbI5Dn5+SKdpUAqaddIMRsmenDzU7SoBhL+IEbYz/1T9KlQDZcxiPD0f8APRS4Tk/UTTlKgBHX04WL/MZ9C61msn1/ysP+Y16FVrFZyLx4BDqqfJT/AN3+Iio+h/izP2TXqJqR1VPkp/7v8RFR9D/FmfsmvUTUwIZMoVtuvLDbi2+CfUUKKSpKW7pIMGLywYkHZRWKxvSyR1y9JP753+En+NW41TV1HBKjTSgpt2GydfmD/ItPite8qdozWtp9fBht1CjN0LCBe3AQo4nL/sTnCCnCfVM+mrSxIBbvibyJIOMiMeg4/rPmfUzR0/h4PgOHdZmUqCReVKQZTdjMi7iRjh5xUmy6YbcIEKTyqAgbcYJrPUAuEqOZMwPOQNmOyiTRDUQfB+vBWM+rnErHp4tWw4s1kLglKk+fwbKe/Zi96fP+VV/7ds1iaQHXDeXJCUpKlQMCYGwbzV3ozSTVoRfaWFDzjnGyunT1pSSvkwlppPbgrnbIUEBSki9MZ4wJOzdjXFWRYggSCCcOQExGcnZz1ODCwFBSwSoFIM5Z4gEZgHOdngpyzphKCRd3iSRB4oPGx3f7q61JWRjEgt6PWUgmEkgG6cxyGJE8xqNa0htJKlpwIETjiQmRMSBmeY1ePqUCkASDM5ZD9bPRNY3atEv262LLlocbSFG6iDgiTGEgDDkqJ67jsX09HOzRbOoLShQIF9IUEnMTGCowBxiJzrlsJbSVXFLiJCBKo3hO2NwxoW1T0KqyW9LKnOFQtp1wFSIUhSVtiQZOd4TlJAOwQbWZK1FYWALqiBBkEZjzQYO+rR1XJWUnp4uiuU9F6QQEkCTEGYxGMxiM4zry1akrBKZMEg8hGYPLjXnSjN5lSgCoOKSAb90IQpSW+EBSNiePjujCmXbO8o3kKAGAKdxBJUSmMCZxxPciMCZt3GVxJC7SBsPmppWkUj+FXm/OmNK6RZYEuuBPST0DZ+VR0PodRfbUFJO0b9oIzB5Kjuk4EpWl0D+Ffm/Oml6fbH8DnQn86gOIqE6mpzZGJLt2uzDUBTbpJxupCJHPKx+ucVCPVHs/0Fp8Vr3lCOmLMELWokknac8QDGHhqquICb61XU5TdJUo7QhMiTiNoA2nKc1qyujZaUatmhdsizfQWnxWveUu2RZ/obR0Ne8rOuEs8fvXZ3cAn08NSUyLt9CwtBgTdgpOd1aZMHA7SDGBNWc5x5QWnB8M0btj2b6F/oa95TzXVAs6v5bw5w37dZPaDxvBTtmcEwcB5xUdyRm4JM11GuLJEht3oR7VMWvXthtJUWniBuDf+10KNgXRBwiu29SChUpSEgSZyIBB40DLCtoyvl0ZTuPCsuj1ULJ9FaOhv269jqm2WJ4G0RzNe8oGSAFpV1mFpSsHii8lxN48WUpIEpMSJymKurTrO0hA4TRzUEpBbLmN1KVBtJSW8Akm8EzGOWM0la4IjNP5CzRevlnfdbbS28kuKupKgiJ2TdWTGzKiHSdvQw2XVhRAgQmJJJgRJArI9EWtt7SFkLTCWggtJUhOIKrxN8kJGw3cccBJJrSdc/iiv7ketUQk2nZMlQM6z6eRaVWNKELSU2ppRvXYjFOEE441t1fODn72zfbtesK+j6hkw4BDqqfJT/3f4iKj6H+LM/ZNeompHVU+Sn/u/wARFR9DfFmfsmvUTVoEyJorFtMWWbS+Z/nOnNXz1bjW0isg0qn/AMl7D+a5sPz1Vj1HCNun5ZXosI5fApf51b6NaKUm6SEm8FAknZEgqy9BjfURESCEn/2qxaUEtpwjEwN/T+vMa4dRujtXBJsDYEzIj/ir+zJJICVATtOQ2SeSqOzpFy8nlkY4CYyqxWq604okgBBgjacNtcknbKpNo96tLS/aXn3GuHBUW0rgFCAlOUKyvT5+entA2o2bSXBFBaQ6LwbUrBIVIEFOy+nDkNCmqekLrzjZbUptQSshHdJVN3eAQRG3ZUi1Wu7bEuuQgIKYQTKrgMid5Mk4V0bxl/Ykk4G2FABxJM7BJjcdpP8AwMK4EhAwvKjYpRJneb2P6wFR2lFSCoOC6UhSSiAFSMCVGSfNUkNtzkFHwqPnmuxSvg4mhkvJKQCpIHzbwkboKZMbqANY3eDtLTi3CAeBbSE3sUXlcIVXcTiVYRgFJrQrbpBDKCtYISNuA80zWOaY1tVbrUkIaR8GeKZIIgqxUrdBHn31TV4ps30E8g1sKLO3dJWtd0KTfl0HEpJlxlJ+anM4xyVLf00ylF1DrTnGSOBDqEqEnEqUuFFO2AkqMxxpihq06zO2AtLF1xpayl1tKQJJF4KbVMggJIAMgjposs2sTdob4QWdxbRwvQy4mTGBSlwqnjAERnhU6LWBGsnmdfaS8k3lutTiG21wtKsyo8HMzOWKcZOJwaW0CpS0m6EiLhKkkDHExBSNwIOGUTTKk2C8YBsy8CcHbMZxAJPECsjvBioGszzlnYU4l/hUXHILgQVDAABDjd3af4gqYrRukZpWwc0a2zbFOKtZdhXCKbCUqKboSoKJWAeMATA5NtVOr9uU3a3WmyFJWlXB8JeQFKTigqBEpkSDhOVP6m6dUlpbJcKAhaiCUlSSFYkYAkHE/wDdVbmky5pQOArEuXSQBegISAAnLjCUxy1z6dqdHRNLCw6QsqHGu3gSFBJkZxIOGBqO8KddXfUoXQUgAYjuVSQoXsQdmWW2qu0KQ42bqhcVAJSSEqSVFJiDIxBxFdRz0Dunm1OOFIxHFAAOJJgAE7Nh9NVx0WlQCHDilYTg4QZXdiQW1YYTM78KsLaQXAcgbhj5uIJEchzHnyqE9aGgtJWpBQswoXlEpBChwhkmFJEQLpjw1SMXba8+hq3skO9YghUNtBIgRwZvCUBQly6DeF4bBjNQ29EKQh1JWghJSVEXxF1LknECRjnllvqULWghy9waVFcty2pQuAEA4IJvGAc0mTPJXUPsENAOCUqSHSpS0haVHHEqBNwSmTGe2ruTSrfevcnFXe3r7FFpCz8GsAkYgEEKCgQcQZBP6NN2dJnHwVK08lF9KmySgoRjM4iUxmTgABicwcxBqG0MM6qYy5ZfWFS+ESJGG45jKKtFOIWS2YO8HLCP14KH2LeEJnAkJUBInPfJ2wMPzqG7bJN5OwRB5og4mRmMd9Wuip70gQlR4MwBIN0mDjny1Ds6UhfHHFkTOW45bq4tycd5/wC646Zw/W+otlQz1ZWg2pjgxeHCJxGQxrQdc/iiv7ketWVamWpfXVnbEJSHUSAMTjmTWqa6fFFf3I9attPhlZmcL/e2f7dr1hX0jXzcv97Z/t2vWFfSNGIcAf1VPkp/7v8AERUfQ/xZn7Jr1E1I6qnyU/8Ad/iIqPof4sz9k16iatASJorG9LqV1y9FyOFd2n56s4FbHWO6VI65fx/nO7T89XJWXUcI26fljTalbAgz/Ufyr2t8lTbZi6ZVxSebEnmzpNKGHG85/KvNoQC41twI9O+uJ0dnoXdkRnxiQObcOSvWuBU2y2lLpAcMXJwkQSTsww6a82JCQlXFThtgbhUi0sX1NL4NCw06hxQIGKQQVAYYkhIEHDGueNZ2ylt7HvU5pDdpbbebum0IvNnbGNy/uvBKyBuun+LCo1qZS+pL9nSoJJWlxSyCVLCsLoTJCAIAw2476LbOgaTdctzK3LObOlKQ2pCSolKVEKvBUAEG7dg9yd9MW+0N6GUqyBrrpLyOEUpwpSUzebugBJBHFJ8NdnbSbkU7raok9TzSK1IUl1IuNSJ5xgY880fo0kiFH5l4eis91GSpsFLmCnQFxyQLsneQZioul9IqYe4JMxdJPLiCnPYLp6a5tObg2qLTgpO0TNd9IOWlNxubpvAxmDGzz9IpjVrVltttuWQtbjQKjJ7oghWJyHGOGWFC9h0qpbmCoAUtXJimB5/RWqaKd/8AFak43EdJA/Otlc1uLw4AvXRtts2VokKCAtbiUxJJTcbIUr5ovxIxMnCaj6v6bLJ4NsK4KUBaFBAUTgZTcAGZGJ5ag6UtyzbHEqWEpU8U3lRxQlBCcTlkB4eWo1qtADjqQGTcWgIdQgArBvKBJBIMAQYznlreKpUij33Zott1raS6C2pKwtTDTgVeFwFTxJOGQBGOWI30Ha8IRwLTSGktKuoKzdCFKhKRxk7rwIkgElOGAxpnvhOMsXlYyZ3QAIGYgAQcMKc08pbelFItClLQVSFqHdBKZAhIjBQiOTHOonyl8/0YqdNhTqVqqEMlbvdOm/GEBMAJHPAnw0D6esnA6SfQJwWFpnaClKvz8Wjyw6fSODuKFx2+Lk3nMIPciYBvAiCScaGdb21OO8Iy0txwpN9V0kJE3W0iDBVAOXzshMVnSjNu+eBHqFNJSVMvLAhy1sX7xQAIWEKSQpJiCpt1CgN2BgzlNVvWKkttgOuAExASzEAKiPg9keCpmr+jRZ2i046VOHF9tN0ov3SEtDCTdCscbt6dwqG/o5oJR8EjutwxHG82VNHVuTjd0MtwZ0pKHXGwSoAIMrImCMsBjj0VXaSsinGmlIbUoy4FXEqUB3F2SBympulG0otDlwBKbqMAIGWcCoKlbiek1tdStGq3jTHBabSDIshChksJfkGIkC/dnwV1DtpLauH4SLyLvCXwMnJiRUe8d56TSKp2npqHxVE/yR3Vcc4dBwrwo4c3LXm0KhX65K8TNWSMXydBHLSURAgZ16id1eFzzxUkHhcZY10KvCYOFeScct/opxKYHTUgutTVf+bZ/tUTgfTkK1jXhUWNR/rb9asn1QRFts+OTyOatS6oSosKz/W36wrSHDKanoZ5fl2z/bNesK+la+XrG5L7H2zXrpr6hoyI8Ad1VPkp/nb/ABEUxob4sz9k16iaf6qvyU/zt/iIpjQ3xZn7Jr1E1aAkTKpbTqtZXFqWptV5ZKjC1gScSYB5TV1TXDYkRkY2yTAOUcu+rOKfJCk1wVKdVLKIhC8MvhF/nXF6p2QkEtqlOXwi/wA6t+uExgZzjwCf9ivXCiJx6DOU5c1V7cPCLdyXllYnVyzgQEK8dXNvp9vQ7SZhJxEHjGpZeEKIxugnon8jXk2gAY544b4E4dBqvah+1fYjuS8jeitGtWZDiGklKXe7BJVOBH8WWBNM6Z0Mza3A48kqWEhIIUpOAJIwSd6jUxTwG/MiYOyZ9FeBaRMRz9BnoiPCKvhHiiMn5Gm9GNJUFJBBAAHGOyNmWwdFRdIau2d9zhXEKKyAJC1DACIwNWSHQThzz4En/wCqcqO1C7pE5y8g/Z9TbG33Dax945PTNXaLMkBKQMEiAN3FKfQTTtKpwj4GcvJSWjVWyuOFxTaisqKyb64vGZwmIxyp5vV6zpWVhvjGSZJOJMnA1a0qYR8EZy8lQvVuzlRUpKiomSSteJ2nPkp3SOgWHzLqCozM3lDGZkQeSrKlUS04yabS249iLKmxauWdruEK51LUojCIBUcByVNYsLaIugiJIMnMzjzicN2G6pNKqvR027aV/BD3dkGzaJabMpTjEYkn01y06HacMrSSZnuiMfBU+lUx0oRdqKv4JsoH9TrGtRWptV5UAnhFjLLAGmTqJYfol+Vc9qiWlVsI+Cc5eQZ7BLD9GvyrvtV3sEsP0S/Ku+1RLSpjHwM5eQWPU/sBMlpflHParna+0f8ARL8o57VFVKmKItgsOp/YPol+Vd9quHqfWD6JflXfaoqpUxQtgr2vtH/RL8o57VdPU+sH0S/Ku+1RTSpihbB6wamWJlxLrbSr6DeSS44qDvgmKt9J6ObtDZadTeQqCRJBkGQQRiDIqVSqaQszrWjVyz2RVkWyhSVKtLSSStasMVZKJ2pFbhWTdULKxf5bXoVWs1SRePAH9VX5Kf52/wARFMaG+LM/ZNeomnuqt8lPc7f4iKZ0N8WZ+ya9RNTAiRMqM5bmUqKVOtJUDiCtIIPKCak1gWsyB14/An4VwmN/CLzNXSsQhkbh1/Z4/etR9oiPTXTb7OcOFax+sRzb6wFm6eIpJxOGI4uQxNPIZ4NxIVgJB2TEg51NF3prybz18xB+Eag58dEQZ5eeuG3MKP71on7RGWPLynprA1BdxJg3DIBuiCRsBIiRPgrlmJvJjDETgN+OyoreiO35N9VbbOJBdaG8FxHh20jbbPnwjW3G+jaQTt3gdFYQX3JMqUYmMfRSbtirwCnF3dovKjoBqyin6lcVZuydIWcZOtCPrEc2/kHRXv8AabH0zXlEfnWNl3R5UuW3ki+boSW1G7AACipOYMnwxy06vrCDcbtEGIvFoAnZeF3AQFY1ftryX7S/cbKw+hwShaVjKUkETukU8lBOQJ5hQP1NLnBvlubpU3mADglQ2cgFEmuOsCrDo1a0GHHFhps/NKhKlDlCUqI5YrGf0vbco4VKiycUE4KISTvw9NekIJEgEg5ECR0isz0FqtabUyp1bt1bsKQVlSlc6jM4+GrDUjSlosek+s7QeI9xLsylLgTeQtP9wBHLeTOVZLVt0ay0sVYeFtQzB6DTLj6EGFLSkxMFQBjfjsogtv8Ar/dZlrv8YT9in111Km3KjDUWEcgp6+a+lb8dP50uvmvpW/HT+dZURSir5HL+Ifg1Xr5r6Vvx0/nS6+a+lb8dP51lMVYKNlzAdxniyjDdBzwnzY1jPXcXVWen0fTLqIOTmlvVP45NKatCF4IWlUZ3VA+inQJyoD1TCOvPg5u8Erurt6ZTM3cK0ewbfB/utIzyjlRnraXb1HC06rdcbkW4dx6KVw7j0VaIzmnKnMpiU9w7j0Uig7j0VauDbXVNyKZjEp3FBIKlEJAzJwA5ya40sLEoIUN6SCPNWea1aWctdvFkSUhttV0Y8WYBWteIm7lHId9DmmHnLC6lTLsKGPFwBxxCkpO0VV6iUsTRaTccjaCIMHM5Cu3TuNZLo/Q6LSwp+12xfXC+OlRUmUmCQJUZjHIQNlSdVNabU7a2rJaLSUtoCkFYu3nIMAqWQSeLjP8ATJmo7q39iJaTVe5qBSdxrlRVaU4N1DC0kB1Krkr4Q3gLxlwZYbCSd2FSq0i7MmqBHqhdzYv8tr0LrWayXqh9zYv8tr0LrWqrLkvHgDuqv8lvc7f4iaZ0N8WZ+ya9RNPdVf5Le52/xE0zob4sz9k16iamBDJorF9JW5o2l9C0CVPOJKyeKkBwgFcAm6M8N87K2es1RpVCnXkKs7C+DedSbzLZUfhFkKKiJkjbMyDWfUavbjdN/Br06cpNIp7TqrcSVh5t5B4yghK0rgG8bsgpKcc5nkrtjsdhtJDKVOIeWQltSQ6rdxVBSSIwOIirJXAAqUylbanE3FBK7yUplJUtAWSRHFBx2jKpGjXmkIWlKXErWlKeEQpKXJvYqSoDDDk9NeY+vmlvv49Pvydf4e1v/wBIXVP0ozfZsTKQluyBQVAMJWoJ4oO2AJJ2lR3UN6J0Yp0KIUhKBmtarogkJJx3YE/8xRlrDolNp0lgUIKmr7q1Cbqg2lKJOEG6ULJkZGk7q8ygNrXaQQVIvhRQiGyxDhSVkmFAkDHArvZ126fV6WlGKk221dVv9zknGVtJfyUDmj2bhuPhawQLoQ7dmCrBd2DxAVCMx01XuNISO6kktDAD+YkrQRxpiAJkAiQKK7QvRzYUBde/eXkw4XFHg1oZAd7kIQhTabwF68CZwNN6StjVrQUMtFsFwEkpEQlb62w2hEm/8LjsASK1XWZyWOm68vajPCSTtgLaWUpm6kyDnPLVmm1SBGIwG3OJjPOorTZWIukmQCbwjEE5Ebkq6Kv7XbChuzJ4NIUwUAplKgSU/wARTtkGRvmuxR2szclePqFvU3B4N47CpEDHYFScf1hTfVUsynGLKB3HXF1R3FSYTPQa9dTm0uOC1Kc7rhGxhlgkjBOwZUaqbs7qFs2hTd1QBuqWkEEEKSoSZBBAIPJWOttwX0vcGtAi0p+DWSgKSoNjiYEJkKEJHKMZqpteibSq2WZbsFxLrK0m9JKUOG/jypAwyqaq0lTqUcIk8EVC8VC6dmBvAEHw0QaLtjblpbU4pENtKN8qARevJACZOO3orgi3mejNLCy+tbhBVlmdvLWea5Lm0Jy/cpyM/wAaqLNL6VYF/wCGazP8xG/noE1itSVuoUhQUkspggyP3ixmOat4P6jz+oX+tlOhpSpKQTGddSwo5D9RPop2yrQAu9OyEgwTiLwBgxhhzE0/Z7cCQCEpxBJAwF1JuQNgvQf/AMp3VseWkhgWXDG8kjMkC6BiM5zwOHIa8KsxmE8YbCMjhOHn6KkLtaQAE4xG3ixhxcsuKDOck7STXHrSlSJAAVFwAbE3RePISbxMZ3oyEETsWWpgi1fdr9KaOn9Jt2cBThgKMTE5JUo5ciTQRqe5etWMYNr9KTHNnR2UplKiJKTKTuMFJPQT01P6Tr6f8pFOsLV4AK4y4KQoKgpPcqBjEHGNuBMYGnGdZG1RccbUDMEBZxDSXVTAwwWkc6gMzUaz6Lak/BpIO9buIBlKcDHBjCEdyN1TlaHaWZU00cEiSVkgAJHFJxSYQgYRN3GqHVsNnWdrgy4TKBweQun4RBcTe4UpHcjHHPDPCpKNNtONPONlUNXgqUkYhMyAcYmRzpUNlemNGobHEaaTx7+BX3RK1FXPLjnjdDD2rja2lobAaLiQHFo7pSQVKAJOZlauMQTxjzUBg+jrSk2s8Lxg5fkmTxlGSR5+mvWs9obDsIbCYVinHIRlO+MejZRq51P22w8644W2mApRXE4AEnlJwyG0+Cg7V0NOWhSXWyrheK2pREIJyBT/AFYCZw8M1m19Vmql9OJPsVqswbMtpIcA4RV4ym7CklAjaccxBM8lQ9N6HcaeBUjgi42lxEbE47c5GAnkqc5qY6HCAsBBPHSJERGEZZeaN9Elh1bvucI5wilAJClFZKlRgMVTEDZzVCXqi7e9SRP1I0UpyzsOuKWq5wi4WSUybqUKSNhhKjO2cyMKL6rdVmw2l9shU33FoJ2pvQUxkCmUjDNJTVlXRDg5dSr2BDqh9zY/8tr1V1rVZL1Q+5sf+W16q61qokI8Ad1WPkp7nb/ETTOhvizP2TXqJp3qsfJT39zf4iaa0P8AFmfsmvUTUwIkTK+edYI68tO34Z38RVfQ1YFpzR6ja7SokAcM6ZJED4RWZOAq6ES20U8hVmBSlQWkFEnI4JUY8KQZqfotld9JXgQpPEJIKpg4eDGKH7ApaG1JQFrEzIComIhOEnLdHLVgi1vXkLU27eTAHEVIGQwuxhhtrx+p6aak0lsz0dLVjire4YazavuPWrhEqKOFbbvgREgXFA+KKgOas8H8JfSoo40FF4E8omDvyogZt15tF0qISmJIIJOZOInOoNqtomFEgHDHCeTZXpdNGtGKkt6OHVdzeL2GdKtt2xd5CQF3RfcuqBnEY4QZO2D3NQ1NtJbWytaGnMDC1gIcE4KStQ42RF2ARzQTaB0kykDDIwcumoOlULUnIE54RPnNbKNRxMlsB5aDa04pWL6VEpUggwlYjBR+cKctLBLZiTeWm7GKpN85eGr+zOPMibpdaM4R8IjZh84efnrzbpebacZCVBDhWuCkHApOE7YnCtbVFablZbdTBwKTaSAe7bGPIg7Kb1n0IbXbVpvhIS22SI4xGIwnwdNWWoKgUPQFDjIm9zKyqZpe4y+l8t31qUlq/wAbiAgQIGGIvCdhKdk1y9T+XY6umSU3l4KuwatIbhsiUbJxg7Zmri26tMPthLqcEYgpwKMNh3Rvwry3pF1SzKUpQRIEG8OLJxmCJ5Ka1T1hataEpK5cUDebVGYwIyjwTka4XpzX1M64dRpzbivQze06MjBB8B/MflU1kkcEk5hjEffO1L09ZFMPLbVkDKTvQcUnowPKDVegSoL/AKSnzgj/AOq00n9R0f5Pp4Pp3OHsx6uUqVdZ8kKu0qVAX2pfxr7tfpTRpb3rgBmM/wDVBepfxr7tfpTRLrE5dDfLe/8Amp/SdvT/AJT2LThgdoj9ctXNltV4CcKCGbXjnVrZrdBqp1BehQmeSu2h+6gkGMsd1UbWkd5qLb9KnueKQcM455nChBYa6LQ5YltII46kJgbgoLPq0F6G1SRN9xMgZJ3nl5KIQUHecRMkY545U71wE5ZbqjknglsWFM4jn5eep9maSnBIqq695a9C2RjOVQlRLbZZKQASRAOfSCD0j/VNVVnSgDiUfOgDwmBVpWsTOYH9UTubH/lteqqtbrJOqL3Fj/ymvVXWt1WXJMeAN6rHyU9/c1+ImmtD/FmfsmvUTTvVZ+S3v7mvxE1k9n18traEoTwN1CUpEtqmAABJv5wKRdBqzX6rbRoCyuLvrs7alEzJSMzmec1m/bBt31Pkle3S7YNu+p8kr26tkiuLNKs+hLM3PBstpnOEgVI6ya+YnorLe2DbvqfJK9uvQ1+t5yDPk1+3RtPkYs1FFjbGSEjwV4Xo1o4ltJ8FZerX+3DMMj7pft0u2DbvqfJK9umSGLNRTo9oZNp6KS9HNHNtJrLu2DbvqfJK9ul2wbd9T5JXt0yGLNQTo5oCA2gDmpgaCs0qPAtyvuzHdc++s27YNu+p8kr26XbBt31Pkle3TMYs1Wz2VDYutoCRuApxaAQQRIMT4MRWTdsG3fU+SV7dLtg276nySvbo5J8imar1sj5o3VEsugrM0q82w2hUzKUwZ8FZr2wbd9T5JXt0u2DbvqfJK9uloKNcGo27RzT0cK2hyBAvCYFR0aAsoEBhoDkTWbdsG3fU+SV7dS9G692hSiHltNpu8VSWXFcaREgKOESfBUfT4LuU2qb2+Q+/Ydm+hb8Wl+w7N9C34tZy51QLaFGOBIkwS2vETge7rx2wbb9T5NXt1OSMu2vBpP7Ds30Lfi0v2HZvoW/FrNu2DbfqfJq9ul2wbb9T5NXt0tDtrwajZdGtNkqbbQgkRIGMbqctFmQ4AFpCgMpGVZV2wbd9T5JXt0u2DbvqfJK9umSJUK4NOGimfo0dFexo5r6NPRWXdsG3fU+SV7dLtg276nySvbpaJpmpixt/MTXFWBs5tpPgrLe2DbvqfJK9ul2wbd9T5JXt0tCmakmxNDJCR4K6bI38wVlnbBt31Pkle3Xoa+2/5rXkl+3S0KZqPWbfzE10WVHzRWWHqgW4ZhnyS/brnbBt31Pkle3S0KZqYsbd4KuJvDIxiKfrJe2DbvqfJK9uudsK2/U+SV7dMkMWFfVF7ix/5TfqrrW6+b7ZrPaLYthD3B3UPNrFxBSZm7iSo4Qo19IVWTsslSERXLo3CuE15JNVJPd0bhSujcKZUV7Ki2h5aUlUTAJgAkmBMADM8lAQdbNY2rCyXFwVHuU7zvPJWW6J1dtmm3Tan18E0cAu7xlDHioGGGOeyduVTrRoa16UtnCWhp1Fmb7lK0KSXNwCVAEJ5wK0ZhDyUpQhKUJSAEpAwAGwCgModbtmgrSi8qWHDAcElpz+lxBkoXGOBncTBFbJofSLdpaS4iIOYwJSYBiRzgg7QQdtV1tsDjyC27cWhXdIUlKknnCga86J0ObKgNspShIAECTgMsSeU9NAEUDcKUDcKrLr28V2Hd4oCygbhSgbhVbDu8Uod3igLKBuFKBuFVsO7xSh3eKAsoG4UoG4VWw7vFKHd4oCygbhUZywtKJUptsk5koSSecxUaHd4pQ7vFATGbMhE3EITOd1IE88U7A3Cq6Hd4pQ7vFAWMDcKUDcKrod3ilDu8UBYwNwpQNwquh3eKUO7xQFjA3Cu3RuFVsO7xSh3eKAsro3CldG4VWQ9vFcKXt4oAU6o2uXWieCZMOqwKgAVDLioHzsRJ2SIknAV0b1M7VamlP2hzgXViW213lrx+mUTgTOUEicccKPTq0jhxaLjfCiYcKQoiTeJTemDMmRjid9WkWgbQfBQGZap6yvaMf6wtqIbBN3AQJM3knaDM+GthbUlSQpMEESCNooI1x1dXbmrriIcRi24kSUnZljH/NR9QLZbW09aWllxKkAlK1NruEAxg5F3HdM8lAaHdG4Urg3CoqVObYpxJVQD1wbhXqmwTXqaA//2Q==',
        name: 'Mi LED TV 4X',
        platform: 'Xiaomi',
        icon: smartTV,
        category: 'Smart TV',
        payment: 399,
        money: 2599,
        paymentText: 'Partially Paid',
        orderStatus: 0,
    },
    {
        img: 'https://resource.logitech.com/w_800,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3-business/gallery/mx-master-3-for-business-graphite-glamour-lg.png?v=1',
        name: 'Logitech MX ',
        platform: 'Logitech',
        icon: mouse,
        category: 'Mouse',
        payment: 89,
        money: null,
        paymentText: 'Fully Paid',
        orderStatus: 1,
    }
]
export {
    productItem
}