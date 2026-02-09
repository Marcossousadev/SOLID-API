📐 SOLID na Prática — Guia Simples para Desenvolvedores

SOLID é um conjunto de 5 princípios de design de software que ajudam a escrever código mais limpo, escalável e fácil de manter.

📚 O que é SOLID?

SOLID é um acrônimo para:

Letra	Princípio	Significado
S	Single Responsibility	Responsabilidade única
O	Open/Closed	Aberto para extensão
L	Liskov Substitution	Substituição segura
I	Interface Segregation	Interfaces específicas
D	Dependency Inversion	Inversão de dependência
🧱 S — Single Responsibility Principle (SRP)

Uma classe deve ter apenas um motivo para mudar.

❌ Errado
class UserService {
  createUser(user) {}
  sendWelcomeEmail(user) {}
}

✅ Certo
class UserService {
  createUser(user) {}
}

class EmailService {
  sendWelcomeEmail(user) {}
}

🔓 O — Open/Closed Principle (OCP)

Código deve permitir extensões sem modificações.

❌ Errado
class PaymentService {
  pay(type) {
    if (type === 'pix') {}
    if (type === 'credit') {}
  }
}

✅ Certo
interface PaymentMethod {
  pay(): void
}

class PixPayment implements PaymentMethod {
  pay() {}
}

class CreditPayment implements PaymentMethod {
  pay() {}
}

🔁 L — Liskov Substitution Principle (LSP)

Classes filhas devem substituir as pais sem quebrar comportamentos.

❌ Errado
class Bird {
  fly() {}
}

class Penguin extends Bird {
  fly() {
    throw new Error('Não voa')
  }
}

✅ Certo
class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Penguin extends Bird {}

🧩 I — Interface Segregation Principle (ISP)

Interfaces pequenas são melhores que grandes.

❌ Errado
interface Worker {
  work()
  eat()
}

✅ Certo
interface Workable {
  work()
}

interface Eatable {
  eat()
}

🔌 D — Dependency Inversion Principle (DIP)

Dependa de abstrações, não de implementações.

❌ Errado
class OrderService {
  private payment = new PixPayment()
}

✅ Certo
class OrderService {
  constructor(private payment: PaymentMethod) {}
}

✅ Benefícios de usar SOLID

✔ Código mais limpo
✔ Fácil manutenção
✔ Escalabilidade real
✔ Testes mais simples
✔ Menos bugs

🏗 SOLID na vida real

SOLID é base para:

Clean Architecture

DDD (Domain Driven Design)

Hexagonal Architecture

Microsserviços

APIs robustas

📦 Estrutura do projeto
src/
 ├─ entities/
 ├─ providers/
 ├─ repositories/
 └─ useCases/
 
📖 Recomendações de estudo

Clean Architecture — Robert C. Martin

Refactoring — Martin Fowler

Domain-Driven Design — Eric Evans
