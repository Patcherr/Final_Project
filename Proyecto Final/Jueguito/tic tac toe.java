import java.util.Scanner;

public class TicTacToeGame {
   static char[][] gameBoard = new char[3][3];
   
   public static void initializeBoard() {
      for (int row = 0; row < 3; row++) {
         for (int col = 0; col < 3; col++) {
            gameBoard[row][col] = '-';
         }
      }
   }
   
   public static void printBoard() {
      System.out.println("-------------");
      for (int row = 0; row < 3; row++) {
         System.out.print("| ");
         for (int col = 0; col < 3; col++) {
            System.out.print(gameBoard[row][col] + " | ");
         }
         System.out.println();
         System.out.println("-------------");
      }
   }
   
   public static void placePiece(char player, int row, int col) {
      gameBoard[row][col] = player;
   }
   
   public static boolean checkWinner(char player) {
      for (int i = 0; i < 3; i++) {
         if (gameBoard[i][0] == player && gameBoard[i][1] == player && gameBoard[i][2] == player) {
            return true;
         }
         if (gameBoard[0][i] == player && gameBoard[1][i] == player && gameBoard[2][i] == player) {
            return true;
         }
      }
      if (gameBoard[0][0] == player && gameBoard[1][1] == player && gameBoard[2][2] == player) {
         return true;
      }
      if (gameBoard[2][0] == player && gameBoard[1][1] == player && gameBoard[0][2] == player) {
         return true;
      }
      return false;
   }
   
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      initializeBoard();
      char player = 'X';
      boolean gameOver = false;
      while (!gameOver) {
         System.out.println("Es el turno de " + player + ". En que fila quieres poner una pieza (0, 1, 2)?");
         int row = scanner
