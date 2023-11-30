import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Button from './components/Button';


//! yatığımız unit testler ekrandan ve kullanıcıdan bağımsız bilgisayar arka planda RAM'de çalışır.Testi yapacağımız bileşeni sanal ortamda ekrana basarız.

//! testi çalıştırmak için `npm run test` yazarız.


//! test methodu 2 parametre alır:
// 1. testin string açıklaması
// 2.gerekeli konrolleri yapan fonksiyon

test('Unit Test Başlığı ekrana basılır',()=>{
render(<App/>);

//sanal ortamdan istediğimiz elemanı seçme 
const headingElement = screen.getByText('Unit Test')

//çağrılan elemanları test etme(expect:ummak birşeylerin olmasını beklemek) 
//toBeInTheDocument dökümanın içinde olup olmadığını kontrol eder.
expect(headingElement).toBeInTheDocument()

})

// !buton ilk başta :
// kırmızı olacak  ve içerisinde maviye çevir yazacak 
// !üzerine tıklandıktan sonra :
// buton aqua renginde olacak ve içerisinde "Kirmiziya Çevir" yazacak

test("buton doğru renge ve içeriğe sahiptir",()=>{
  // test edeceğimiz bileşeni sanalda ekrana basma
  render(<Button/>)
  
  // test edeceğimiz elementi seçme
  const colorBtn = screen.getByRole("button",
  {name: "Maviye Çevir",
})

  // butonun rengi kırmızı mı ?
  expect(colorBtn).toHaveStyle({background: 'red'})

  //buton üzerinde tıklanma olayı tetikle
  fireEvent.click(colorBtn);

  //yeni rengi kontrol etme
  expect(colorBtn).toHaveStyle({background:"aqua"})

  // içindeki yazı doğru mu?
  expect(colorBtn).toHaveTextContent("Kirmiziya Çevir")

})
