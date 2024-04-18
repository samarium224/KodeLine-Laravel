<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the admin user
        $admin = User::create([
            'name' => 'Maplekode',
            'email'=> 'admin@maplekode.com',
            'password'=> bcrypt('admin.maplekode@3s!$'),
            'email_verified_at'=> now(), // Assuming email is verified upon registration
        ]);

        // Assign the 'admin' role to the admin user
        $admin->addRole('admin');
    }

}
