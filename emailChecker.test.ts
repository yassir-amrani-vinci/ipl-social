import { isValidEmail } from './emailChecker';

test('doit retourner false si l email ne contient pas de @', () => {
    expect(isValidEmail('yassir.gmail.com')).toBe(false);
});

test('doit retourner false si le domaine ne contient pas de point ou si le point est à la fin', () => {
    expect(isValidEmail('yassir@gmailcom')).toBe(false);
    expect(isValidEmail('yassir@gmail.')).toBe(false);
});

test('doit retourner false si l email contient un espace', () => {
    expect(isValidEmail('yassir @gmail.com')).toBe(false);
});

test('doit retourner false s il manque du texte avant ou après le @', () => {
    expect(isValidEmail('@gmail.com')).toBe(false);
    expect(isValidEmail('yassir@')).toBe(false);
});