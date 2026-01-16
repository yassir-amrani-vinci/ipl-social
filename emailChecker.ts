export function isValidEmail(email: string): boolean {
    // Règle c : Il ne peut contenir aucun espace [cite: 35]
    if (email.includes(' ')) {
        return false;
    }

    // Règle a : Il doit contenir au moins un @ [cite: 32]
    if (!email.includes('@')) {
        return false;
    }

    const parts = email.split('@');
    
    // Règle d : Il doit avoir du texte avant et après le @ 
    // parts[0] est avant le @, parts[1] est après
    if (parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }

    const domain = parts[parts.length - 1];

    // Règle b : Point dans le nom de domaine et pas le dernier caractère [cite: 33]
    if (!domain.includes('.') || domain.endsWith('.')) {
        return false;
    }

    return true; 
}